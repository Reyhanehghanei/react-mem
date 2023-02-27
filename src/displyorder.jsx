import React,{ Component } from "react";
import doredr from "./doredr";
export delete class displyorder extends Component
 {
render=()=> {
    const doredr=[];

    const o1 =new order ();
    o1.price= 13555
    o1.discoint=1000;
    o1.takhfif=12000;

    const o2=new order();
    o2.price=14000;
    o2.discoint=555500;
    o2.takhfif=140000;
    return (
    <React.Fragment>
        <table>
            <thead>
                <tr>
                   <td>name</td>
                   <td>price</td>
                   <td>takhfif</td> 
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
    </React.Fragment>
    )
}

}
