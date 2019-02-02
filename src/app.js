console.log("app.js is working");
// JSX = JavaScript XML

var app = {
    title: 'My-App',
    subtitle: 'Biarkan Code menjadi hobimu',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    
    const option = e.target.elements.option.value;
    
    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        templateOne();
    }
    //console.log('form submitted!');
};

const onRemoveAll = () => {
    app.options = [];
    templateOne();
};

const templateOne = () => {
    var template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are ur options :' : 'No Options'}</p>
            <p>{app.options.length}</p>
            <button onClick={onRemoveAll}>Remove All 1</button>
            <ol>
                <li>Item one</li>
                <li>Item two</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template,appRoot);
}



var user = {
    name : 'Ghalib',
    age : 20,
    location : 'Indonesia'
};

var userName = 'Ghalib';
var userAge = 20;
var userLocation = 'Indonesia';

function getLocation(location){
    if(location){
        return location;
    }
    else{
        return 'Unknown';
    }
}

var templateTwo = (
    <div>
        <h1>Name : {user.name ? user.name : 'Unknown'}</h1>
        <p>Age : {user.age}</p>
        <p>Location : {getLocation(user.location)}</p>
    </div>
);

let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
};
const minusOne = () => {
    count--;
    renderCounterApp();
};
const reset = () =>{
    count = 0;
    renderCounterApp();
};

var appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const templateThree = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );
    ReactDOM.render(templateThree,appRoot);
};

//ReactDOM.render(template,appRoot);
renderCounterApp();
//templateOne();

