<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card card-default">
                    <h5 class="card-header">Thank you!</h5>

                    <div class="card-body">
                        <p>Your order id: <b v-html="uid"></b></p>
                        Btw, it is now <b v-html="weather"></b> in <b v-html="location"></b>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                uid: '',
                city: '',
                country: '',
                weather: 'unknown sky',
            }
        },
        computed: {
            location() {
                return `${this.city}, ${this.country}`;
            }
        },
        mounted() {
            this.uid = this.$store.state.uid;
            axios.get(`/api/booking/get/${this.$store.state.uid}`).then(response=>{
                this.weather = response.data.sky;
                this.city = response.data.city;
                this.country = response.data.country;
            }).catch(()=>{
                this.$router.push({ name: 'home' });
            });
        }
    }
</script>
