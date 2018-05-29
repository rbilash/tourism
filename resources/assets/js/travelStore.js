import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';


Vue.use(Vuex);

const travelStore = new Vuex.Store({
    state: {
        travellers: [],
        lat: '',
        lng: '',
    },
    mutations: {
        FETCH(state, travellers) {
            state.travellers = travellers;
        },
        ADD(state, traveller) {
            state.travellers.unshift(traveller);
        },
        CLEAR(state) {
            state.travellers = [];
        },
        REMOVE(state, idx) {
            state.travellers.splice(idx, 1);
        },
        LAT(state, lat) {
            state.lat = lat;
        },
        LNG(state, lng) {
            state.lng = lng;
        },

    },
    actions: {
        addTraveller({commit}, traveller) {
            commit('ADD', traveller);
        },
        clear({commit}) {
            commit('CLEAR');
        },
        remove({commit}, idx) {
            commit('REMOVE', idx);
        },
        lat({commit}, lat) {
            commit('LAT', lat);
        },
        lng({commit}, lng) {
            commit('LNG', lng);
        },
    }
});

export default travelStore;