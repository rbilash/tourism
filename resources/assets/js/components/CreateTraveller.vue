<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card card-default">
                    <h5 class="card-header">Add a Traveller</h5>
                    <div class="card-body">
                        <div class="alert alert-danger" role="alert" v-show="errors.items.length">
                            Please fill all fields.
                        </div>
                        <form @submit="onSubmit" @reset="onReset" novalidate>
                            <div class="form-group">
                                <label>Traveller's name</label>
                                <input type="text" class="form-control" v-model="form.name" name="name" v-validate="'required'">
                                <small v-if="errors.first('name')" class="form-text text-danger">{{ errors.first('name') }}</small>
                                <small v-else class="form-text text-muted">Your name will be printed on your tickets!.</small>
                            </div>
                            <div class="form-group">
                                <label>Traveller's phone</label>
                                <input type="text" class="form-control" v-model="form.phone" name="phone" v-validate="'required|phone'">
                                <small v-if="errors.first('phone')" class="form-text text-danger">{{ errors.first('phone') }}</small>
                                <small v-else class="form-text text-muted">We will use it to finalize order details.</small>
                            </div>
                            <hr>
                            <button type="submit" class="btn btn-primary">Add</button>
                            <button type="reset" class="btn btn-secondary">Back</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import PhoneNumber from 'awesome-phonenumber';

    const phoneNumber = {
        getMessage: field => `Phone is not a valid phone number`,
        validate (value) {
            return new Promise(resolve => {
                let phone = new PhoneNumber(value);
                resolve({ valid: phone.isValid() })
            })
        }
    };

    export default {
        data () {
            return {
                form: {
                    name: '',
                    phone: '',
                },
            }
        },
        mounted() {
            const dict = {
                custom: {
                    phone: {
                        required: "Phone number required!"
                    },
                    name: {
                        required: "Traveller's name required!"
                    }
                }
            };

            this.$validator.extend('phone', phoneNumber);
            this.$validator.localize('en', dict);


        },
        methods: {
            onSubmit (evt) {
                this.$validator.validate().then(result => {
                    if (!result) {
                        evt.preventDefault();
                    }
                    else {
                        this.$store.dispatch('addTraveller', this.form);
                        this.$router.push({ name: 'list' });
                    }
                });
            },
            onReset: function (evt) {
                evt.preventDefault();
                this.$router.push({ name: 'list' });
            },
        }
    }
</script>
