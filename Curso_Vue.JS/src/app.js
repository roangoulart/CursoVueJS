const MyNameApp = {
    data() {
        return {
            name: "Roan",
            age: 22,
            input_name: ""
        }
    },
    methods: {
        submitForm(e) {

            e.preventDefault();
        }
    }
}

VTTCue.createApp(MyNameApp).mount("#app");