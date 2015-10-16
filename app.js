var app = angular.module('editableDirective', []);

app.directive ('makeEditable', function ()
{
    return {
        restrict: 'A',
        templateUrl: 'makeEditTemplate.html',
        transclude: true,
        scope: true,
        link: function (scope, element, attrs)
        {



            scope.toggleEdit = function ()
            {
                if ('contenteditable' in attrs && attrs['contenteditable'] != false)
                {

                        scope.editMode = false;
                        attrs.$set('contenteditable', false);


                }
                else
                {

                        scope.editMode = true;
                        attrs.$set('contenteditable', true);

                }


            }

        }

    }


})