function showContent(contentId) {
    // Hide all content items first
    var contentItems = document.querySelectorAll('.content-item');
    contentItems.forEach(function(item) {
        item.style.display = 'none';
    });

    // Display the selected content item
    var selectedContent = document.getElementById(contentId);
    if (selectedContent) {
        selectedContent.style.display = 'block';
    }
}

function showSubtopic(subtopicId) {
    // Hide all subtopic contents first
    var subtopicContents = document.querySelectorAll('.subtopic-content');
    subtopicContents.forEach(function(item) {
        item.style.display = 'none';
    });

    // Display the selected subtopic content
    var selectedSubtopic = document.getElementById(subtopicId);
    if (selectedSubtopic) {
        selectedSubtopic.style.display = 'block';
    }
}
