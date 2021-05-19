const ProgressBar = (props) => {
    const { bgcolor, completed, cal, type, total } = props;
  
    const containerStyles = {
     display: 'flex',
      backgroundColor: "#e0e0de",
      borderRadius: 50,
      float: 'left',
      height: "0.75em",
      width: "60%",
      margin: "1em",
      marginLeft: "4em",
      marginTop: "-0.5em",
     
    }

    
    const fillerStyles = {
      height: '100%',
      width: `${cal*100/total}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'right'
    }
  
    const labelStyles = {
      padding: 5,
      color: 'black',
      fontWeight: 'bold',
      marginLeft: 10
    }

    
    return (
    <div style={containerStyles}>
      
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}g`}</span>
        </div>
           
     
      
    </div>
    );
  };
  
  export default ProgressBar;