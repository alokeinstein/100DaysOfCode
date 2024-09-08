function Buttons() {
//this is the manual code without the use of hooks
     const blue =() => document.body.style.backgroundColor = 'blue'
     const grey =() => document.body.style.backgroundColor = 'grey'
     const green =() => document.body.style.backgroundColor = 'green'
     const red =() => document.body.style.backgroundColor = 'red'
     const yellow =() => document.body.style.backgroundColor = 'yellow'
     const cyan =() => document.body.style.backgroundColor = 'cyan'
     const white =() => document.body.style.backgroundColor = 'white'
     const black =()=> document.body.style.backgroundColor = 'black'

  return (
    <>
      <button onClick={blue} type="button" className="btn btn-primary">
        blue
      </button>
      <button onClick={grey} type="button" className="btn btn-secondary">
        grey
      </button>
      <button onClick={green} type="button" className="btn btn-success">
        green
      </button>
      <button onClick={red} type="button" className="btn btn-danger">
        red
      </button>
      <button onClick={yellow} type="button" className="btn btn-warning">
        yellow
      </button>
      <button onClick={cyan} type="button" className="btn btn-info">
        cyan
      </button>
      <button onClick={white} type="button" className="btn btn-light">
        white
      </button>
      <button onClick={black} type="button" className="btn btn-dark">
        black
      </button>
    </>
  );
}
export default Buttons;
