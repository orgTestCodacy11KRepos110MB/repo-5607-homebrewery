require('./errorPage.less');
const React = require('react');
const createClass = require('create-react-class');
const _ = require('lodash');
const cx = require('classnames');

const Nav = require('naturalcrit/nav/nav.jsx');
const Navbar = require('../../navbar/navbar.jsx');
const PatreonNavItem = require('../../navbar/patreon.navitem.jsx');
const RecentNavItem = require('../../navbar/recent.navitem.jsx').both;
const HelpNavItem = require('../../navbar/help.navitem.jsx');

const BrewRenderer = require('../../brewRenderer/brewRenderer.jsx');

const ErrorPage = createClass({
	getDefaultProps : function() {
		return {
			ver     : '0.0.0',
			errorId : ''
		};
	},

	text : '# Oops \n We could not find a brew with that id. **Sorry!**',

	render : function(){
		return <div className='errorPage sitePage'>
			<Navbar ver={this.props.ver}>
				<Nav.section>
					<Nav.item className='errorTitle'>
						Crit Fail!
					</Nav.item>
				</Nav.section>

				<Nav.section>
					<PatreonNavItem />
					<HelpNavItem />
					<RecentNavItem />
				</Nav.section>
			</Navbar>

			<div className='content'>
				<BrewRenderer text={this.text} />
			</div>
		</div>;
	}
});

module.exports = ErrorPage;
