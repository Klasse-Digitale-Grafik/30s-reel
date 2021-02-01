<?php

function short( ?string $str, int $length = 200 ) {
    if( $str === null ){
        return null;
    }
    return substr( $str, 0, $length );
}

function pageData( $page ): array {

    $data = [
        'title' => short( $page->title(), 60 ),
        'description' => short( $page->description(), 200 ),
        'credits' => short( $page->credits(), 200 ),
        'url' => short( $page->url(), 200 ),
        'source' => short( $page->source(), 200 ),
    ];

    return $data;
}

return function ( $content ) {

    $pages = [];

    foreach ($content->pages() as $page){
        $pages[] = pageData( $page );
    }

    return [
        'data' => $pages,
    ];

};
