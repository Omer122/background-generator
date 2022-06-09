const Person = props =>{ //functional Component
    return React.createElement('div',{},[
        React.createElement('h1',{},props.name),
        React.createElement('p',{},props.occupation)
    ]);
};

const App = () => {
    return React.createElement('div',{},[
        React.createElement('h1',{class:'title'}, "React is rendered"),
        React.createElement(
            Person,
            {name:'Omer',occupation:'Programmer'},
            null),
        React.createElement(
            Person,
            {name:'Oren',occupation:'Teacher'},
            null),
        React.createElement(
            Person,
            {name:'Assaf',occupation:'Student'},
            null),
    ])
};
// ReactDOM.render(
//     React.createElement(App), 
//     document.getElementById('root'));

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));