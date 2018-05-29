<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card card-default">
                    <div class="card-header">Travellers <router-link :to="{ name: 'create' }" class="btn btn-primary btn-sm float-right">Add traveller</router-link></div>
                    <ul class="list-group list-group-flush" v-if="totalTravellers>0">
                        <li class="list-group-item" v-for="(traveller, index) in travellers">
                            <h4>{{ traveller.name }}</h4>
                            <p class="text-muted">{{ traveller.phone }}</p>
                            <a href="javascript:void(0)" @click="removeItem(index)" class="remover">&times;</a>
                        </li>
                    </ul>
                    <div class="card-body" v-show="totalTravellers==0">
                        <p>Please add travellers to your trip.</p>
                    </div>
                    <div class="card-body" v-show="totalTravellers>0">
                        <a href="#" @click="saveList" class="btn btn-primary btn-sm">Save List</a>
                        <a href="#" @click="resetList" class="btn btn-danger btn-sm float-right">Reset List</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import { mapState } from 'vuex';

    export default {
        mounted() {
            //this.$store.dispatch('list');
        },
        computed: {
            ...mapState(['travellers']),
            totalTravellers() {
                return this.travellers.length;
            }
        },
        methods: {
            resetList: function() {
                this.$store.dispatch('clear');
            },
            saveList: function() {
                axios.post(`/api/booking/save`, {
                    travellers: this.travellers,
                    lat: this.$store.state.lat,
                    lng: this.$store.state.lng,
                });
            },
            removeItem: function(index) {
                this.$store.dispatch('remove', index);
            }
        }
    }
</script>

<style>
    .remover {
        position: absolute;
        z-index: 1;
        top: 1rem;
        right: 1.3rem;
        font-size: 2rem;
        color: #999;
        opacity: 0.7;
    }
    .remover:hover {
        text-decoration: none;
        color: #999;
        opacity: 1;
    }
</style>