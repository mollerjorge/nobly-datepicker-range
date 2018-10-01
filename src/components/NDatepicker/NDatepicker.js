import React, {Component} from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './NDatepicker.css';
import moment from 'moment';
class NDatepicker extends Component {
  state = {
    selection: {
      startDate: new Date(),
      endDate: new Date(),
    },
    isVisible: false,
    horizontalPosition: 'left',
  }
	handleSelect = ranges => {
    this.setState({
      selection: {
        ...ranges.range1
      }
    })
  }

  closeDatePicker = () => {
    this.setState({
      ...this.state,
      isVisible: false
    })
  }

  saveDate = () => {
    const savedDate = moment(this.state.selection.startDate).format('MMM D, YYYY') + '-' + moment(this.state.selection.endDate).format('MMM D, YYYY')  ;
    this.setState({
      ...this.state,
      dateValue: savedDate
    });
  }

  handelClick = () => {
    this.setState({
      ...this.state,
      isVisible: true
    })
  }

  componentDidMount() {
    const input = document.getElementById(this.props.id);
    const rect = input.getBoundingClientRect();

    if (window.innerWidth / 2 >= rect.x) this.setState({...this.state, horizontalPosition: 'right' });
    else this.setState({...this.state, horizontalPosition: 'left' });
  }
	render() {
    const {id} = this.props;
    const {horizontalPosition, dateValue, isVisible, selection} = this.state;
    let style = {}
    if (horizontalPosition === 'left') {
      style.right = '0';
    } else {
      style.left = '0';
    }
		return (
      <div style={{position: 'relative'}}>
        <input id={id} value={dateValue} onClick={this.handelClick} placeholder="Enter some date" type="text"/>
        {isVisible &&
        
        <div style={style} className="nobly__drd-wrapper-absolute">
        <div className="nobly__rdr-wrapper">
          <DateRangePicker
            className="nobly-dpr"
            showMonthAndYearPickers
            direction="horizontal"
            showMonthArrow
            showDateDisplay
            months={2}
            ranges={[selection]}
            onChange={this.handleSelect}
            rangeColors={['#0080de']}
            
          />

          <div className="nobly__btn-wrapper">
            <button onClick={this.closeDatePicker}>cancel</button>
            <button onClick={this.saveDate}>SAVE</button>
          </div>
        </div> </div>}
      </div>
		)
	}
};

export default NDatepicker;