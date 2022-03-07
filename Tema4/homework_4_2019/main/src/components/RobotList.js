import React, { Component } from 'react'
import RobotStore from '../stores/RobotStore'
import Robot from './Robot'
import RobotForm from './RobotForm'



class RobotList extends Component {
	constructor(){
		super()
		this.state = {
			robots : []
		}
	}
	componentDidMount(){
		this.store = new RobotStore()
		this.setState({
			robots : this.store.getRobots()
		})
		this.store.emitter.addListener('UPDATE', () => {
			this.setState({
				robots : this.store.getRobots()
			})			
		})
	}

	addRobot = (robot) =>{
		this.store = new RobotStore()
		this.store.robots = this.robots;
		this.store.addRobot(robot);
		this.robots.push(robot);
	}

	render() {
		return (
			<div>
				 
				{
					this.state.robots.map((e, i) => 
						<Robot item={e} key={i} />
					)
				}
				<div>
				<RobotForm onAdd ={this.addRobot}/>
				</div>
			</div>
			
		)
	}
}

export default RobotList
