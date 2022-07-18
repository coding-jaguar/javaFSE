import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Student extends Component {

    constructor(props) {
        super(props)
    }

    static propTypes = {
        id: PropTypes.number,
        studentName: PropTypes.string,
        enrolled: PropTypes.bool,
        major: PropTypes.string.isRequired,
        campus: PropTypes.oneOf(['North', 'South']),

        courses(prop, propName) {
            var propValue = prop[propName]
            if (propValue == 'Statistics' || propValue == 'Philosophy') {
                throw Error("Sorry, course not offered")
            }
        }
    }

    static defaultProps = {
        id: Math.floor(Math.random() * 10000000),
        enrolled: true
    }

    render() {
        return (
            <div className='student'>
                <div>
                    Id: {this.props.id}
                </div>
                <div>
                    Name: {this.props.name}
                </div>
                <div>
                    Enrolled: {this.props.enrolled ? 'Yes' : 'No'}
                </div>
                <div>
                    Campus: {this.props.campus}
                </div>
                <div>
                    Major: {this.props.major}
                </div>
                <div>
                    courses: {this.props.courses}
                </div>
            </div>
        )
    }
}

export default Student