# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
# [Backend] Create a new unique field [custom_id] in the Agent table
### Acceptance criteria: 
 - [ ] The default value must the current ID;
 - [ ] The fields must be unique; Max length = [TBD];
### Time/effort estimates: 1 hour;
### Implementation details: 
 - the creation must be via migrations;

# [Backend] Map the custom_id field at all Agent endpoints;
### Acceptance criteria: 
 - [ ] The custom_field must be visible in the GET /agents;
 - [ ] must be changeable in POST /agents and PUT /agents;
### Time/effort estimates: 4 hours;
### Implementation details: 
 - Update the getShiftsByFacility method; 
 - Update the model;

# [Frontend] Add a new field on agent section to fill the custom ID;
### Acceptance criteria: 
 - [ ] The fields must be a text field with max lenght = [TBD];
### Time/effort estimates: 4 hours;
### Implementation details: 
 - Send the custom Id Field on POST and PUT /agents;
 - Fill this field with the custom_id value;

# [Backend] Replace the current ID field for the custom_id field into the function generateReport;
### Acceptance criteria:
 - [ ] The custom field must be appearing in the report at the same place of the current Id; 
 - [ ] The current Id shall not be visible;
### Time/effort estimates: 3 hours;

# [Questions]
 - Is it possible to replace all references to the current ID field for the custom_id?
 - What is the custom_id max length?
