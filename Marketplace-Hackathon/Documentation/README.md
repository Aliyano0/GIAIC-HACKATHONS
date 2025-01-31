# MARKETPLACE-BUILDER-HACKATHON SUMMARY DAY 1-6.

## TIMELESS TIMBER-GENERAL E-COMMERCE STORE.

#### DAY-1

On the first day, after brain storming for 8 hours and 3 revisions. I decided to build a general e-commerce marketplace of Household furnitures. Decided schemas and what will I be selling and decided the final goal of this project which was a one stop solution for household furniture and a furniture marketplace like never before in Pakistan. And also adding custom furniture orders features as well.

#### DAY-2 PLANNING THE TECHNICAL FOUNDATION.

On second day, I planned the technical foundation for my marketplace. Planned which tech stack I will be using with Next.js, Tailwind CSS and Shadcn UI for UI, Sanity for managing dynamic data, Clerk for User Authentication, ShipEngine for order tracking and Stripe to handle customer payments. Also planned what pages I will need to add in my project which were a order page, a user dashboard, an admin dashboard, a checkout page.

\*{[Here is the link for Technical Foundation pdf.](https://github.com/Aliyano0/GIAIC-HACKATHONS/blob/main/Marketplace-Hackathon/Documentation/Day2/day2.pdf)}

#### DAY-3 API INETEGRATION REPORT.

_Introduction_: The goal of the project was to fetch product data from an API, transform it to fit the application's schema, and store it in a CMS (Sanity).

**API Details**:

_Endpoint_: /api/product

- No authentication required.
- Returns JSON data containing fields like id, name, price, description, and category.

_Schema Adjustments_:

- The Sanity schema was modified to align with the API data structure. Additional fields were manually populated where necessary.

**Migration Process**:

- Postman was used for API testing.
- Migration utilized the ETL (Extract, Transform, Load) pattern via scripting.
- Environment variables were stored in a .env file for sensitive data.
- Fetching data from the API and inserting it into Sanity was done using the fetch method and the Sanity client.create method.

**Code Overview**:

_Sanity Client Setup_: Uses environment variables and the createClient method for API interaction.
_Migration Script_:

- Handles image uploads to Sanity.
- Maps and uploads product data, including fields such as id, name, price, description, and others.
- Logs success or failure for each product.

_Tools Used_:

- Postman for testing.
- JavaScript with fetch for API calls and Sanity client for database interactions.

_Output_:

- Product data from the external API is successfully migrated and displayed on the frontend, with images uploaded and linked.

\*{[Here is the link for API Integration pdf.](https://github.com/Aliyano0/GIAIC-HACKATHONS/blob/main/Marketplace-Hackathon/Documentation/Day3/day3.pdf)}

#### DAY-4 DYNAMIC FRONT-END COMPONENTS.

**Tasks Completed**:

_Product Grid_:

- Redesigned the product card UI.
- Integrated the redesigned card into a grid component.
- Dynamically mapped products in the grid using data fetched from the Sanity CMS.

_Dynamic Product Details Page_:

- Created a ProductDetail folder with a [slug] folder for dynamic routing.
- Extracted product slugs from route parameters.
- Implemented an asynchronous function to fetch product data from Sanity using GROQ queries.

_Add to Cart Functionality_:

- Temporarily stored cart data using the browser's local storage.
- Plans to integrate Context API or Zustand for state management in the future.

_Search Functionality_:

- Created a server-side rendered page for search results.
- Utilized the Next.js Search component to handle user queries.

_Clerk Authentication_:

- Integrated Clerk authentication.
- Currently, no conditions are enforced for actions like adding to the cart without an account. Future plans to implement these conditions.

_Challenges Encountered_:

- Resolved a "react-is module not found" error by installing the react-is package.
- Debugged a typo in the GROQ query.

_Pending Tasks_:

- Complete all functionalities outlined in the Day 4 documentation.
- Reapply responsiveness to pages after recent UI changes.

\*{[Here is the link for Day-4 repo.](https://github.com/Aliyano0/GIAIC-HACKATHONS/tree/main/Marketplace-Hackathon/Documentation/Day4)}

#### DAY-5

_Introduction_: The goal was to ensure functionality, performance, and responsiveness of the platform, while addressing challenges and enhancing security.

**Testing**:

_Comprehensive testing was conducted, and all tests passed successfully._

1. Tested Features and Results:

- Navigation: Verified links and mobile menu (Passed).
- Search Functionality: Tested category search (Passed).
- Add to Cart: Added multiple quantities via a selector (Passed).
- Responsiveness: Verified across various screen sizes (Passed).
- Product Listing: Ensured all products displayed correctly (Passed).
- Category Filter: Tested all filter options (Passed).
- API Error Handling: Verified error messages when API was disconnected (Passed).

2. Performance Optimization:

- Reduced static components by moving HTML directly to page files.
- Optimized images using the .webp format and implemented lazy loading.
- Added a utility function for efficient data fetching with conditional logic.

_Outcome_: Noticeably faster page loading and improved performance.

**Challenges**:

- Difficulties in fetching data and creating schema types, resolved after 8 hours of effort and assistance from ChatGPT.
- Had to rebuild product cards due to schema changes.
- Addressed TypeScript type errors by defining appropriate interfaces.
- GROQ query errors were resolved by testing conditions individually in Sanity Studio.
- PC performance issues affected website performance during development.
  Security Measures:

* Ensured API keys were securely stored in .env files to prevent exposure.

_Conclusion_: The platform is now robust, responsive, and optimized for performance, with resolved challenges and implemented security measures.

#### DAY-6

1. I decided to host my marketplace on Vercel.
2. Added environment variables in vercel manually after connect my Github Repository.
3. Found type errors for slug returning as a Promise<string> but I had implemented only string type. Which was resolved by adding the code below:

   `{ params }: { params: Promise<{ slug: string }> }`

4. Deployed successfully and ensured that everything is fine in the build as well.

This concludes the Day-6.

\*{[Here is the link for test-report.csv](https://github.com/Aliyano0/GIAIC-HACKATHONS/tree/main/Marketplace-Hackathon/Documentation/Day5/2-Testing-Report)}

\*{[Here is the link for Test-report of LigthHouse and Video of testing responsiveness and functionality.](https://github.com/Aliyano0/GIAIC-HACKATHONS/tree/main/Marketplace-Hackathon/Documentation/Day5/1-Functional-Deliverables)}
