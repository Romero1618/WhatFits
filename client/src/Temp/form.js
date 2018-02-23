

Vue.component('tabs', {
    template: `
        <div>
            <div class="tabs">
                <ul>
                    <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
                        <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
                    </li>
                </ul>
            </div>
            <div class="tabs-details">
                <slot></slot>
            </div>
        </div>
    `,

    data() {
        return { tabs: [] };
    },

    created() {
        this.tabs = this.$children;
    },

    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = (tab.href == selectedTab.href);
            });
        }
    }
});


Vue.component('tab', {
    template: `
        <div v-show="isActive"><slot></slot></div>
    `,

    props: {
        name: { required: true },
        selected: { default: false }
    },

    data() {
        return {
            isActive: false
        };
    },

    computed: {
        href() {
            return '#' + this.name.toLowerCase().replace(/ /g, '-');
        }
    },

    mounted() {
        this.isActive = this.selected;
    },
});

class Errors{
    constructor(){
        this.errors ={};
    }

    has(field){
        return this.errors.hasOwnProperty(field);
    }

    any(){
        return Object.keys(this.errors).lenght>0;
    }

    get(field)
    {
        if(this.errors[field])
        {
            return this.errors[field][0];
        }
    }

    record(errors){
        this.errors = errors;
    }

    clear(field){
        if(field) {
            delete this.errors[field];
            return;
        }

        this.errors ={};
    }
}

class Form{
    constructor(data){
        this.originalData = data;

        for(let field in data){
            this[field] = data[field];
        }

        this.errors = new Errors();
    }

    data(){
        // Clone the object
        //let data = Object.assign({}, this);
        // Delete un-necessary data
        //delete data.originalData;
        //delete data.errors;

        return data;
    }

    reset(){
        for(let field in originalData){
            this[field] = '';
        }
    }

    post(url)
    {
        this.submit('POSt', url);
    }

    submit(requestType, url){
        return new Promise((resolve, reject) => {

            alert('submitting')
            axios[requestType](url, this.data())
                .then(response =>{
                    this.onSuccess(response.data);

                    resolve(response.data);
                })
                .catch(error=> {
                    this.onFail(error.response.data);
                    
                    reject(error.response.data);
                })
        })
        
    }

    onSuccess(data){
        // TEMPORARY
        alert(data.message);

        this.errors.clear();
        this.reset();
    }

    onFail(errors){
            this.errors.record(errors);
    }
}


new Vue({
    el: '#root',


    data: {
        form: new Form({
            firstname:'',
            lastname:'',
            email:'',
            password:'',
            gender:'',
            address:''
        })
    },

    methods: {
        onSubmit(){

            this.form.submit('post', '/projects')
                .then(data => {
                    alert('Handling it!');
                    console.log(data);
                })
                .catch(errors => console.log(errors));
        }

     }
});