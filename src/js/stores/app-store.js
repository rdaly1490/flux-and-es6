import {dispatch, register} from '../dispatchers/app-dispatcher';
import AppConstants from '../constants/app-constants';
import { EventEmitter } from 'events';

// Here we store the state and methods that adjust the state (no getters, just setters?);

const CHANGE_EVENT = 'change';

var testValue = false;

const testAction = (item) => {
	let test = item;
	console.log('1: ', testValue);
	testValue = test;
	console.log('2: ', testValue);
};

// Here we have the getters anc an cal them by importing AppStore and blah blah Appstore.getTestValue();

const AppStore = Object.assign(EventEmitter.prototype, {
	emitChange(){
		this.emit( CHANGE_EVENT )
	},

	addChangeListener( callback ){
		this.on( CHANGE_EVENT, callback )
	},

	removeChangeListener( callback ){
		this.removeListener( CHANGE_EVENT, callback )
	},

	getTestValue(){
		return testValue;
	},
});

  // Here's where the dispatcher calls the methods above using the action it receives

dispatcherIndex: register( function(action){
	switch(action.actionType){
  		case AppConstants.TEST_ACTION:
			testAction(action.item);
			break;
		default:
			return true;
	}
	AppStore.emitChange();
	return true;
});

export default AppStore