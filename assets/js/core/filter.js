function filterPosts()
{
    const postDates = document.getElementsByClassName("blogPageDate");
    const utcDates = [];

    for (let p=0; p<postDates.length; p++)
    {
        let dateFromPage = String(postDates[p].textContent);

        let utcDateFromPage = new Date(dateFromPage.slice(0, -6));
        utcDates.push(utcDateFromPage);
    }

    let sortedPosts = [];
    for (let i in utcDates)
    {
        console.log(utcDates[i]);
        sortedPosts.push(utcDates.sort(
            function(a, b)
        {
            return new Date(a) - new Date(b);
        }));
    }

    for (let i in sortedPosts)
    {
        console.log(sortedPosts[i]);
    }
} 

filterPosts();