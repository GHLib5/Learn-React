'use strict';

console.log("app.js is working");
// JSX = JavaScript XML

var app = {
    title: 'My-App',
    subtitle: 'Biarkan Code menjadi hobimu',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        templateOne();
    }
    //console.log('form submitted!');
};

var onRemoveAll = function onRemoveAll() {
    app.options = [];
    templateOne();
};

var templateOne = function templateOne() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are ur options :' : 'No Options'
        ),
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            { onClick: onRemoveAll },
            'Remove All'
        ),
        React.createElement(
            'p',
            null,
            'Instant Chat'
        ),
        app.options.map(function (option) {
            return React.createElement(
                'p',
                { key: option },
                'Ghalib: ',
                option
            );
        }),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option', placeholder: 'Write ur words' }),
            React.createElement(
                'button',
                null,
                'Enter'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

var user = {
    name: 'Ghalib',
    age: 20,
    location: 'Indonesia'
};

var userName = 'Ghalib';
var userAge = 20;
var userLocation = 'Indonesia';

function getLocation(location) {
    if (location) {
        return location;
    } else {
        return 'Unknown';
    }
}

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Name : ',
        user.name ? user.name : 'Unknown'
    ),
    React.createElement(
        'p',
        null,
        'Age : ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location : ',
        getLocation(user.location)
    )
);

var count = 0;
var addOne = function addOne() {
    count++;
    renderCounterApp();
};
var minusOne = function minusOne() {
    count--;
    renderCounterApp();
};
var reset = function reset() {
    count = 0;
    renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
    var templateThree = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'reset'
        )
    );
    ReactDOM.render(templateThree, appRoot);
};

//ReactDOM.render(template,appRoot);
//renderCounterApp();
templateOne();
