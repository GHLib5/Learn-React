

const obj = {
    name: 'Ghalib',
    getName(){
        return this.name;
    }
};

const getName = obj.getName.bind(obj);

console.log(getName());

class GHLibApp extends React.Component{
    render(){
        const title = 'GHLib App';
        const subtitle = 'Jadikan Coding sebagai Hobimu';
        const options = ['Thing one', 'Thing two', 'Thing Three'];
        return (
            <div>
                <Header title={title} subtitle={subtitle}/> 
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component{
    handlePick(){
        alert('alert');
    }

    render(){
        return (
            <div>
                <button onClick={this.handlePick}>What Should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component{
    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }

    handleRemoveAll(){
        console.log(this.props.options);
    }
    
    render(){
        //console.log(this.props.options.length);
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                <p>Options Component Here</p>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option} />)
                }
            </div>
        );
    }
}

class Option extends React.Component {
        
    render(){
        console.log(this.props);
        return (
            <div>
                {this.props.optionText}               
            </div> 
        );
    }
}

class AddOption extends React.Component{
    handleAddOption(e){
        e.preventDefault();
        
        const option = e.target.elements.option.value;

        if(option){
            alert(option);
        }
        e.target.elements.option.value = '';
    }
    
    render(){
        return (
            <form onSubmit={this.handleAddOption}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        );
    }
}


// const jsx = (
//     <div>
//         <GHLibApp />
//     </div>
// );

ReactDOM.render(<GHLibApp />, document.getElementById('app'));