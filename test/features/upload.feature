Feature: Validate the upload functionality
    @upload
    Scenario: Verify if the upload is selected and file is uploaded
        Given I am on the Herokupp upload page
        Then I should select a file and upload it