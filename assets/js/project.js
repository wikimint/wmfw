document.addEventListener("DOMContentLoaded", function() {
    if (window.self !== window.top) {
        var headStyle = $("<style>").text(`
            header, footer, #relatedProjects {
                display: none !important;
            }
        `);
        $("head").append(headStyle);
    }
});
