import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/cheese';

export class CheeseList extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(actions.fetchCheeses());
    }

    render() {
      console.log('cheeses from state:', this.props.cheeses);
      let cheesesList = this.props.cheeses.map((cheese, index) => {
          return (
              <li key={index}>{cheese}</li>
          )
      });
      console.log('cheesesList: ', cheesesList);
        return (
            <div>
                <ul>
                    {cheesesList}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({cheeses: state.cheeses});

export default connect(mapStateToProps)(CheeseList);
