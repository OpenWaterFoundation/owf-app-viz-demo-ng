// ----------------------------------------------------------------
// Display Data Class: This class is used to add the data from the csv file 
// as a table in the visualization 'DATA' tab.
// ----------------------------------------------------------------
function displayData(){

	var properties = new Properties(configurationFile);
	properties = properties.properties;
	
	var URL;
	if(properties.MultipleDatasets){
		URL = expand_parameter_value(properties.DataFileName, {"Year": properties.DefaultDatasetChoice});
	}else{
		URL = properties.DataFileName;
	}

	d3.select("#downloadButton")
		.attr("action", URL);

	var data = Papa.parse(URL, {
		header: false,
		download: true,
		comments: true,
		dynamicTyping: false,
		skipEmptyLines: true,
		error: function(error){
			throw new Error;
		},
		complete: function(results){
			//Datatable utilizing Clusterize.js (has some bugs)
			if(properties.DataTableType.toUpperCase() == "CLUSTERIZE"){
				header = results.data[0];
				results = results.data.slice(1, results.data.length);
				d3.select("#headers")
					.html(function(){
						var head = ''
						for(i = 0; i < header.length; i++){
							head += '<th>' + header[i] + '</th>'
						}
						return head;
					});
				var data = [];
				for(i = 0; i < results.length; i++){
					var str = '<tr>'
					for(j = 0; j < results[i].length; j++){
						str += '<td>' + results[i][j] + '</td>'
					}
					str += '</tr>';
					data.push(str);
				}
				var clusterize = new Clusterize({
				  rows: data,
				  scrollId: 'scrollArea',
				  contentId: 'contentArea'
				});
			}

			if(properties.DataTableType.toUpperCase() == "JQUERY"){
				header = results.data[0];
				for(i = 0; i < header.length; i++){
					header[i] = {title: header[i]};
				}
				results = results.data.slice(1, results.data.length);
				$(document).ready(function(){
			 		$("#displayData").DataTable({
			 			data:results,
			 			paging: false,
			 			columns: header
			 		})
			 	})
			}
		}
	});
	
}