angular.module('todos').service('Todo',['$http',
	function($http)
	{
		var Todo = function(data){

			this.text = data.text;
			this.created_at = data.created_at;
			this.done = data.done;
			this.list_id = data.list_id;
			this.priority = data.priority;
			this.updated_at = data.updated_at;

		}

		/*List.prototype.select = function(){
			List.selected_list = this;
		}*/
			
		return Todo;
	}
]);