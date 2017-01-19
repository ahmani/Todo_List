angular.module('todos').service('Todo',['$http',
	function($http)
	{
		var Todo = function(data){

			this.text = data.text;
			this.id = data.id;
			this.created_at = data.created_at;
			this.done = data.done;
			this.list_id = data.list_id.$oid;
			this.priority = data.priority;
			this.updated_at = data.updated_at;

		}

		Todo.prototype.select = function(){
			Todo.selected_todo = this;
		}
			
		return Todo;
	}
]);