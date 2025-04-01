Feature: End to End flow
    @flow
    Scenario: Validate the end-to-end flow
        Given I navigate to herokupp application
        Then I select the upload hyperlink
        Then I upload a file