<?php
  /*
  Plugin Name: Commentpress Overlay
  Description: A temporary solution for some changes to CommentPress
  Version:     0.1
  Author:      Joe Bacal, Smith College
  License:     GPL2
  License URI: https://www.gnu.org/licenses/gpl-2.0.html
  */

//add the js and styles
function smith_overlay_scripts(){
  wp_enqueue_script( 'overlay', plugins_url( 'stylize.js' , __FILE__ ), array('jquery'), '', true );
}
add_action('wp_enqueue_scripts', 'smith_overlay_scripts');
