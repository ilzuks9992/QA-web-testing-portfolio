### 1. Document Information

Document: Requirements Analysis 
Identifier: QA-RA-2026-001
Project: QA Portfolio – Vivi.lv Manual Testing
Website: https://www.vivi.lv
Version: 1.0
Author: Ilze Brakovska
Created: 2026-07-20
Last Updated:  



### 1. Functional Requirements


User Flow 1 – Visitor Experience

Navigation

* FR-001 The system shall provide a navigation menu on all public pages.
* FR-002 The system shall display all available navigation items in the navigation menu.
* FR-003 The system shall navigate to the selected page when a navigation menu item is selected.

Language Selection

* FR-004 The system shall provide a language selection control.
* FR-005 The system shall display the available languages.
* FR-006 The system shall allow the user to select a language.
* FR-007 The system shall update the user interface to the selected language.
* FR-008 The system shall retain the selected language during navigation between public pages.

Notifications
* FR-009 The system shall display active notifications on the Home Page.
* FR-010 The system shall allow the user to open the notifications drop-down list.
* FR-011 The system shall display the notifications content in the drop-down list.
* FR-012 The system shall allow the user to close the notifications drop-down list.

News
* FR-013 The system shall display news items on the Home Page.
* FR-014 The system shall display the news image, publication date and title for each news item.
* FR-015 The system shall allow the user to open a selected news item.
* FR-016 The system shall display the full content of the selected news item.
* FR-017 The system shall allow the user to navigate to the next set of news items.
* FR-018 The system shall allow the user to navigate to the previous set of news items.
* FR-019 The system shall allow the user to search for news items using keywords.

Changes
* FR-020 The system shall display available routes with current changes information.
* FR-021 The system shall allow the user to select a specific route to view related changes.
* FR-022 The system shall display changes associated with the selected route.
* FR-023 The system shall allow the user to switch between available routes and view related changes.
* FR-024 The system shall visually associate the selected route with the corresponding route on the map.

Map
* FR-025 The system shall display the interactive map.
* FR-026 The system shall allow the user to zoom in and zoom out on the map.
* FR-027 The system shall allow the user to move the map view.
* FR-028 The system shall provide map language selection options.
* FR-029 The system shall display available train routes on the map.
* FR-030 The system shall visually distinguish different train routes using route indicators.
* FR-031 The system shall display moving train indicators on active routes.
* FR-032 The system shall allow the user to select a train indicator to view train information.
* FR-033 The system shall display train details including train number, route, delay status, next stop, departure time, and arrival time.
* FR-034 The system shall allow the user to select different train indicators and view corresponding train information.
* FR-035 The system shall allow the user to select a station on the map.
* FR-036 The system shall display the selected station name and available station options.
* FR-037 The system shall provide access to nearby train information for the selected station.
* FR-038 The system shall allow the user to search for a station using the station search function.
* FR-039 The system shall display upcoming trains for the selected station.
* FR-040 The system shall display train departure and arrival information for the selected station.
* FR-041 The system shall allow the user to search for train information by train route or direction.
* FR-042 The system shall display the selected train route and current train position on the map.

Contact & Support
* FR-043 The system shall display customer service contact information, including email addresses, phone numbers, and working hours.
* FR-044 The system shall provide access to email communication options.
* FR-045 The system shall allow the user to initiate email communication using the provided email contact options.
* FR-046 The system shall provide a contact form for submitting user inquiries.
* FR-047 The system shall allow the user to enter personal information and inquiry details in the contact form.
* FR-048 The system shall allow the user to attach files to the contact form submission.
* FR-049 The system shall allow the user to submit the completed contact form.

Accessibility Settings
* FR-050 The system shall provide access to accessibility settings.
* FR-051 The system shall provide text size adjustment options.
* FR-052 The system shall apply the selected text size setting to the user interface.
* FR-053 The system shall allow the user to modify the interface contrast settings.
* FR-054 The system shall provide available contrast adjustment options.
* FR-055 The system shall apply the selected contrast setting to the user interface.
* FR-056 The system shall allow the user to restore accessibility settings to their default values.

Click-to-Call
* FR-057 The system shall provide a click-to-call option on public pages.
* FR-058 The system shall display the customer support phone number.
* FR-059 The system shall initiate a phone call using the selected phone number when the user selects the click-to-call option.
* FR-060 The system shall redirect the user to the device calling application to complete the phone call.

User Flow 2 – Ticket Purchase

Train Search

* FR-061 The system shall allow the user to select a departure station.
* FR-062 The system shall allow the user to select a destination station.
* FR-063 The system shall allow the user to select a travel date.
* FR-064 The system shall display available train routes matching the search criteria.
* FR-065 The system shall display a validation message when required fields are not completed.
* FR-066 The system shall allow the user to sort the search results.
* FR-067 The system shall display the search results according to the selected sorting option.
* FR-068 The system shall allow the user to view detailed information for each train from the search results.

Ticket Selection

* FR-069 The system shall navigate to the Ticket Selection page when the ticket cart icon is selected.
* FR-070 The system shall display the available ticket types.
* FR-071 The system shall allow the user to select an available ticket type.
* FR-072 The system shall display ticket options for the selected ticket type.

Ticket Purchase

* FR-073 The system shall allow the user to purchase a ticket as a guest or as a registered user.
* FR-074 The system shall provide the option to register before completing the ticket purchase.
* FR-075 The system shall display the available payment methods.
* FR-076 The system shall allow the user to select a payment method.
* FR-077 The system shall allow authenticated users to save a selected route as a favourite route.
* FR-078 The system shall display saved favourite routes in the user’s Favourite Routes section.
* FR-079 The system shall associate saved favourite routes with the authenticated user’s account.
* FR-080 The system shall allow authenticated users to remove a saved route from their Favourite Routes.


### User Flow 3 – Registered User. 

My Account

Authentication
* FR-077 The system shall allow the user to sign in using a registered email address and password.
* FR-078 The system shall allow the user to create a new account.
* FR-079 The system shall provide access to the My Account area upon successful authentication.

My Tickets module
* FR-080 The system shall display the user’s purchased tickets.
* FR-081 The system shall allow the user to filter tickets by ticket type.
* FR-082 The system shall provide access to the ticket purchase process.

Profile
* FR-083 The system shall display the user’s profile information.
* FR-084 The system shall display the registered contact information.
* FR-085 The system shall allow the user to manage discount card information.
* FR-086 The system shall allow the user to add an email address for ticket delivery.

Change Password
* FR-087 The system shall allow the user to change the account password.
* FR-088 The system shall require the current password, a new password, and confirmation of the new password.

Notification Preferences
* FR-089 The system shall allow the user to manage notification preferences.
* FR-090 The system shall allow the user to subscribe to route-specific notifications.
* FR-091 The system shall allow the user to subscribe to news notifications.

Payment Cards
* FR-092 The system shall display saved payment cards.
* FR-093 The system shall allow the user to add a new payment card.

Favourite Routes
* FR-094 The system shall display saved favourite routes.
* FR-095 The system shall allow the user to add a new favourite route.

Purchase History
* FR-096 The system shall display the user’s purchase history.
* FR-097 The system shall display purchase details, including the ticket number, train number, route, ticket type, payment date, order number, and purchase price.
* FR-098 The system shall allow the user to repeat a previous ticket purchase.

Delete Account
* FR-099 The system shall allow the user to delete the account.


### 2. Non-Functional Requirements

Performance
* NFR-001 The system shall provide acceptable page loading performance under normal operating conditions.
* NFR-002 The system shall display search results within an acceptable response time under normal operating conditions.
* NFR-003 The interactive map shall respond to user interactions without significant performance degradation.

Usability
* NFR-004 The navigation structure shall remain consistent across all public pages.
* NFR-005 The system shall maintain a consistent user interface layout across all public pages.

Compatibility
* NFR-010 The system shall support the latest stable versions of commonly used web browsers.
* NFR-011 The system shall provide a responsive user interface that adapts to different screen sizes and devices.

Reliability
* NFR-012 The system shall handle invalid user input without causing system errors or failures.
* NFR-013 The system shall provide informative messages when requested operations cannot be completed.
* NFR-014 The system shall maintain availability during normal operating conditions.


### 5. Business Rules

Ticket Purchase Rules
* BR-001 A valid departure station and destination station must be selected before a train route search can be performed.
* BR-002 The departure station and destination station must be different.
* BR-003 A valid travel date must be selected before available train routes can be displayed.
* BR-004 A valid ticket type must be selected before proceeding with ticket purchase.
* BR-005 All required purchase information must be provided before the payment process can be completed.
* BR-006 Ticket purchase shall be available for both guest users and registered users.

 User Account Rules
* BR-007 Valid authentication credentials are required to access account-related functionality.
* BR-008 Personal account information shall only be accessible to authenticated users.
* BR-009 The current password must be provided before a new password can be set.
* BR-010 The new password must be confirmed before completing the password change process.
* BR-011 User account information shall be associated with the authenticated user account.

 Ticket and Purchase History Rules
* BR-012 Purchased tickets shall be linked to the user account when the purchase is completed by an authenticated user.
* BR-013 Purchase history shall contain only tickets associated with the authenticated user account.
* BR-014 Ticket details displayed in purchase history shall correspond to the completed purchase transaction.

 Notification and Favourite Route Rules
* BR-015 Users may subscribe to notifications for selected routes.
* BR-016 Users may manage notification preferences through account settings.
* BR-017 Favourite routes shall be associated with the authenticated user account.

Contact and Support Rules
* BR-018 Required contact information must be provided before a contact form submission can be completed.
* BR-019 Submitted contact forms shall include the user inquiry details before submission.
* BR-020 Attached files must comply with the supported file format requirements before submission.

 Accessibility Rules
* BR-021 Accessibility settings selected by the user shall be applied to the user interface.
* BR-022 Accessibility settings shall remain active during user navigation until changed or reset.
* BR-023 Users shall be able to restore accessibility settings to the default configuration.

 News Search
* BR-024 News search shall return only news items matching the entered search criteria.
* BR-025 News search shall be available for published news items.
* BR-026 The system shall display an appropriate message when no matching news items are found.

 Map and Route Information Rules
* BR-027 Train information displayed on the map shall correspond to the selected train route or train indicator.
* BR-028 Station information shall be displayed only after the user selects a valid station.
* BR-029 Nearby train information shall correspond to the selected station.
* BR-030	Authenticated users may save selected routes as favourite routes.
* BR-031	Saved favourite routes shall be displayed in the user’s Favourite Routes section.
* BR-032	Authenticated users may remove saved favourite routes from their account.
* BR-033	Favourite routes shall be associated with the authenticated user account.

### 4. Assumptions
* ASS-001 The requirements analysis is based on publicly available Vivi.lv website functionality and user interface observations.
* ASS-002 Internal system requirements, technical specifications, and backend processes are not accessible for review.
* ASS-003 The observed website behaviour is considered to represent the intended system functionality.
* ASS-004 Third-party services and integrations are considered to operate according to their intended functionality.
* ASS-005 Payment processing, authentication services, and other external systems are outside the scope of this analysis.
* ASS-006 The analysis reflects the functionality available at the time of testing and may not represent future system changes.
* ASS-007 Test data, user accounts, and system configurations used during testing are considered representative of typical user scenarios.

### 5. Risks
* RISK-001 Website functionality may change after completion of the requirements analysis.
* RISK-002 The analysis may not fully cover internal system behaviour due to limited access to backend processes and technical documentation.
* RISK-003 Some functionality may rely on third-party services that are outside the scope of this project and cannot be fully validated.
* RISK-004 Limited access to test accounts and test data may restrict validation of certain user account features.
* RISK-005 Security-related requirements may not be fully verified without access to system architecture and security documentation.
* RISK-006 Changes to external services or integrations may impact system functionality.
* RISK-007 Testing results may not represent all possible user scenarios due to limitations of the available test environment.

### 6. Open Questions
* OQ-001 Which browsers and browser versions are officially supported by the system?
* OQ-002 What are the defined performance requirements for page loading and search response times?
* OQ-003 What password complexity requirements apply to user authentication?
* OQ-004 What are the session timeout and account security requirements for authenticated users?
* OQ-005 Which payment providers and payment methods are officially supported?
* OQ-006 What are the business rules regarding ticket refunds, cancellations, and modifications?
* OQ-007 Are there any limitations on the number of saved favourite routes or stored payment cards?
* OQ-008 Which external systems and integrations support authentication, payments, notifications, and train data?
* OQ-009 Which accessibility standards does the system aim to comply with?
