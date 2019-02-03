class Header extends React.Component {
    render() {
        return <p>This is React Paragraph</p>;
    }
}

const jsx = (
    <div>
        <h1>Tittle</h1>
        <Header />
    </div>
);

ReactDOM.render(jsx, document.getElementById('app'));