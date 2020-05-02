/**
 *  This is a container component that wraps the presentational Link component.
 *  It connects to the Redux store, extracts the state and determines which filter is currently active.
 *  It also passes down a method to Link that will allow it to set an active filter upon 
 *  click (by dispatching the right action).  
 */

import Link from '../components/Link'

// HINT: Add the mapStateToProps and mapDispatchToProps methods here.


// HINT: Connect this component to Redux using connect()
export default Link;
