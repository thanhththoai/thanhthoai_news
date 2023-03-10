import React from "react";
import categories from "../data/category";

class Tabnav extends React.Component {
    render () {
        return (
            <div>
                <ul>
                    {
                        this.props.categories.map(categorie => {
                            const active = (categorie === this.props.selected ? 'active' : '');
                            return (
                                <li key={categorie}>
                                    <a className={"nav- link" + active} onClick={() => this.props.setSelected(categorie)}>
                                        {categorie} 
                                    </a>
                                </li>
                            );
                        })
                    }
                </ul>
                {this.props.children }
            </div>
        )
    }
}
export default Tabnav;