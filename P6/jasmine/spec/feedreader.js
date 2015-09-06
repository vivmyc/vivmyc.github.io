/*
 * feedreader.js
 *
 * This is the Jasmine spec file containing tests to be
 * run against this application.
 */

/*
 * All tests within the $() function,
 * since some of these tests may require DOM elements.
 */
$(function() {
    /*
     * RSS Feeds Test Suite for the RSS feeds definitions
     * contained within the allFeeds array.
     */
    describe('RSS Feeds', function() {

        /*
         * This test ensures that the allFeeds variable has been defined
         * and that it is not an empty array.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /*
         * This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty, or null.
         */
        it('have URLs defined', function() {
            for (i=0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
            };
         });

         it('have URLs != empty string', function() {
            for (i=0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).not.toBe('');
            };
         });

         it('have URLs that are not null', function() {
            for (i=0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).not.toBeNull();
            };

         });


        /*
         * This test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty or null.
         */
         it('have names defined', function() {
            for (i=0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
            };
         });

         it('have names != empty string', function() {
            for (i=0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).not.toBe('');
            };
         });

         it('have names that are not null', function() {
            for (i=0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).not.toBeNull();
            };
         });
    }); // RSS Feeds test suite


    /*
     * Test Suite for the menu
     */
    describe('The menu', function() {

        /*
         * This test ensures the menu element is
         * hidden by default. The menu is hidden when
         * "menu-hidden" class attribute is present.
         */
        var $body = $('body');

        it('is hidden by default', function() {
            expect($body.hasClass('menu-hidden')).toEqual(true);
        });


         /*
          * This test that ensures the menu changes
          * visibility when the menu icon is clicked. The
          * first time we click the menu should be displayed
          * and the 2nd click the menu should be hidden again.
          */
        var $menuIconLink = $('.menu-icon-link');

        it('is shown when 1st clicked and then hidden when clicked again', function() {
            $menuIconLink.click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $menuIconLink.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

    }); // The menu test suite


    /*
     * Test suite for Initial Entries
     */
    describe('Initial Entries', function() {

        /*
         * This test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * loadFeed() is asynchronous so this test uses beforeEach
         * and asynchronous done() function.
         */
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        it('has at least one feed entry', function (done) {
            expect( $(".feed").children().length).toBeGreaterThan(0);
            done();
        });

    }); // Initial Entries test suite


    /*
     * Test suite for when user selects a new feed
     */
    describe('New Feed Selection', function() {

        /*
         * This test ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * loadFeed() is asynchronous, so use async done() function.
         */
        var $oldTitle = $(".header-title").text();
        console.log("Old Title="+$oldTitle);

        beforeEach(function(done) {
            loadFeed(1, function() {
                done();
            });
        });

        it('changes the content', function (done) {
            console.log("New Title="+$(".header-title").text())
            expect( $(".header-title").text()).not.toBe($oldTitle);
            done();
        });

    }); // New Feed Selection test suite


    /*
     * Test suite for future Search feature
     */
    xdescribe('Search Functionality', function() {

        /*
         * This test ensures that the feed lists are filtered correctly
         * base on the search input entered when user clicks the submit button.
         */
        it('displays the correctly filtered links', function() {
            $('.search-input').val("Emoji");  // enter search input
            $('.search-submit').click();      // click submit
            expect( $(".feed").children().length).toBe(1);
            expect( $(".feed").find("h2").text()).toContain('Emoji');
        });

        /*
         * This test uses a spy to ensures that filterList() function is not run if the search
         * input value is empty.
         */
        it('does not call filterList() if submit clicked with empty search input', function() {
            feedList = $('.feed-list'),
            $('.search-input').val('');  // empty search input
            $('.search-submit').click(); // click submit
            spyOn(feedList, "filterList");  // replace filterList function with a spy
            expect(feedList.filterList).not.toHaveBeenCalled();
        });
    });

}());
