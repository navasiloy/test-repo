/**
 * This directive activates the navigation bar links by checking the current state.
 * If the current state matches the link ui-sref state, then it will be active.
 *
 * Must be placed on a <li> element, that has an <a> element as a child. e.g.:
 *
 * <li activate-by-state><a ui-sref="dashboard">Dashboard</a></li>
 */
export default function($transitions, $state) {
    'ngInject';

    function changeActiveState(li, link, currentState){
        if(currentState === link) {
            angular.element(li).addClass('active');
        } else {
            angular.element(li).removeClass('active');
        }
    }

    function link(scope, element) {
        const li = element[0];
        const link = li.children[0].getAttribute('ui-sref');

        $transitions.onSuccess({to: '*'}, function(transition){
            changeActiveState(li, link, transition.to().name);
        });

        changeActiveState(li, link, $state.current.name);
    }

    return {
        restrict: 'A',
        link: link
    };
}
