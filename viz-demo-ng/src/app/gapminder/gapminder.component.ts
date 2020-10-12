import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gapminder',
  templateUrl: './gapminder.component.html',
  styleUrls: ['./gapminder.component.css']
})
export class GapminderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 
public configurationFile = "./data/viz-config.json";
public dataLoaded = false;

public gapminderSelected = true;
/*Opens and displays div selected by tabs*/
openTab(evt, name) {
	if(name == "Gapminder"){
		this.gapminderSelected = true;
	}else{
		this.gapminderSelected = false;
	}
	if(name == "Data" && !this.dataLoaded){
		this.displayData();
		this.dataLoaded = true;
	}
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(name).style.display = "block";
    evt.currentTarget.className += " active";
}

// ----------------------------------------------------------------
// Display Data Class: This class is used to add the data from the csv file 
// as a table in the visualization 'DATA' tab.
// ----------------------------------------------------------------
displayData(){

// 	var properties = new Properties(this.configurationFile);
// 	properties = properties.properties;
	
// 	var URL;
// 	if(properties.MultipleDatasets){
// 		URL = expand_parameter_value(properties.DataFileName, {"Year": properties.DefaultDatasetChoice});
// 	}else{
// 		URL = properties.DataFileName;
// 	}

// 	d3.select("#downloadButton")
// 		.attr("action", URL);

// 	var data = Papa.parse(URL, {
// 		header: false,
// 		download: true,
// 		comments: true,
// 		dynamicTyping: false,
// 		skipEmptyLines: true,
// 		error: function(error){
// 			throw new Error;
// 		},
// 		complete: function(results){
// 			//Datatable utilizing Clusterize.js (has some bugs)
// 			if(properties.DataTableType.toUpperCase() == "CLUSTERIZE"){
// 				header = results.data[0];
// 				results = results.data.slice(1, results.data.length);
// 				d3.select("#headers")
// 					.html(function(){
// 						var head = ''
// 						for(i = 0; i < header.length; i++){
// 							head += '<th>' + header[i] + '</th>'
// 						}
// 						return head;
// 					});
// 				var data = [];
// 				for(i = 0; i < results.length; i++){
// 					var str = '<tr>'
// 					for(j = 0; j < results[i].length; j++){
// 						str += '<td>' + results[i][j] + '</td>'
// 					}
// 					str += '</tr>';
// 					data.push(str);
// 				}
// 				var clusterize = new Clusterize({
// 				  rows: data,
// 				  scrollId: 'scrollArea',
// 				  contentId: 'contentArea'
// 				});
// 			}

// 			if(properties.DataTableType.toUpperCase() == "JQUERY"){
// 				header = results.data[0];
// 				for(i = 0; i < header.length; i++){
// 					header[i] = {title: header[i]};
// 				}
// 				results = results.data.slice(1, results.data.length);
// 				$(document).ready(function(){
// 			 		$("#displayData").DataTable({
// 			 			data:results,
// 			 			paging: false,
// 			 			columns: header
// 			 		})
// 			 	})
// 			}
// 		}
// 	});
	
}

}
