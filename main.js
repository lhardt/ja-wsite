function remove_class(obj, classname){
	// If it is at the end, removes trailing space.
	obj.className = obj.className.replace(" " + classname, "");
	// Else, does not remove any spaces.
	obj.className = obj.className.replace(classname, "");
}
function add_class(obj, classname){
	obj.className = obj.className.replace(classname, "");
	obj.className = obj.className += ' ' + classname;
}
function toggle_menu(){
	let menu = document.getElementById('menu');
	if(menu.className.includes(' toggled')){
		menu.className = menu.className.replace(" toggled", "");
	} else {
		menu.className += ' toggled';
	}
}
function onScroll(){
	console.log('scrrr');
	if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
		add_class(document.getElementById('pageheader'), 'opaque');
	} else {
		remove_class(document.getElementById('pageheader'), 'opaque');
	}
}
function slideshow_click(i_new_selection){
	var slides = document.getElementsByClassName('slide');
	var slide_controllers = document.getElementsByClassName('slide-controller')[0].children;

	for(var i = 0; i < slides.length; ++i){
		remove_class(slides[i], 'selected');
	}
	add_class(slides[i_new_selection], 'selected');

	for(var i = 0; i < slide_controllers.length; ++i){
		remove_class(slide_controllers[i], 'selected');
	}
	add_class(slide_controllers[i_new_selection], 'selected');

}
