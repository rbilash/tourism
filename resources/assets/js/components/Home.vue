<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card card-default">
                    <h5 class="card-header">Travel booking</h5>

                    <div class="card-body">
                        <p v-if="!geoNotAllowed">
                            <span v-if="!hasLocation">For better user experience please let us know your current position.</span>
                            <span v-else>Thank you! Your lat is <b>{{ this.lat }}</b> and long is <b>{{ this.lng }}</b>. <i class="text-success"><br>But why should you care?</i><br>You can book now!</span>
                        </p>
                        <p v-else class="text-danger">
                            Oouch! we thought we are friends :( <br>
                            Anyway you can continue booking...
                        </p>
                        <p v-show="hasLocation || geoNotAllowed">
                            <router-link :to="{ name: 'create' }" class="btn btn-primary">Book a trip</router-link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                lat: '',
                lng: '',
                geoNotAllowed: false
            }
        },
        computed: {
            hasLocation: function() {
                return (this.lat && this.lng);
            }
        },
        mounted() {
            this.$getLocation({})
                .then(coordinates => {
                    let {lat, lng} = coordinates;
                    this.lat = coordinates.lat;
                    this.lng = coordinates.lat;
                    // lets better store everything with vuex
                    this.$store.dispatch('lng', this.lng);
                    this.$store.dispatch('lat', this.lat);
                }).catch((err)=>{
                    //here should be 'no position access' but we are not going to check if it really is in this demo proj
                    this.geoNotAllowed = true;
                });
        }
    }
</script>
