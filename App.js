import React from "react";
import ReactDOM from"react-dom/client";

//React Element

const heading  = React.createElement("h1" ,
{id : "heading" , xyz : "abc"}, "Helloworld from react from app");
const root = ReactDOM.createRoot(document.getElementById("root"));

const jsxHeading =  <h1 id ="JsxId" className = "jsxclass">This is Jsx heading</h1>

const jsxHeading1 =  (<h1 id ="JsxId" className = "jsxclass">
    This is Jsx heading
</h1>
)

//root.render(jsxHeading) 

//React compnent
//react functional component
const  Headingcomponent = () =>{
    return <h1 id ="JsxId" className = "jsxclass">This is functioanal component</h1>;
}
// or write as below
const  Title = () => <h1 id ="JsxId" className = "jsxclass">This is title component</h1>;

//for multiple  
const  Headingcomponent2 = () =>{
    return ( <div> 
             <Title/>
                <h1 id ="JsxId" className = "jsxclass">This is heading component</h1>
              </div>);
}

const number = 100;
const  Headingcomponent3 = () =>{
    return ( <div> 
                {number}
             <Title/>
                <h1 id ="JsxId" className = "jsxclass">This is heading component</h1>
              </div>);
}

root.render(<Headingcomponent3/>)