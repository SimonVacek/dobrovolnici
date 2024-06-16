<?php

namespace dobrovolnici\Service;

class ApiService {
    /**
    *@var string
    */
    private string $url;
    
    public function __construct(string $url) {
        $this->url = $url;
    }

    public function getResult() {
        // Initialize cURL session
        $ch = curl_init();

        // Set the URL option
        curl_setopt($ch, CURLOPT_URL, $this->url);

        // Return the response instead of outputting
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        // Set the User-Agent header
        curl_setopt($ch, CURLOPT_USERAGENT, 'MyUserAgent/1.0');

        // Set the Accept header to get JSON response
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Accept: application/json'
        ));

        // Optionally, disable SSL verification (not recommended for production)
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

        // Force the use of HTTP/1.1
        curl_setopt($ch, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_1);

        // Enable verbose output for debugging
        curl_setopt($ch, CURLOPT_VERBOSE, true);

        // Execute the cURL session
        $response = curl_exec($ch);

        // Check if there was an error
        if (curl_errno($ch)) {
            // Get the error message
            $error = curl_error($ch);
            // Close the cURL session
            curl_close($ch);
            // Return the error message
            return $error;
        } else {
            // Close the cURL session
            curl_close($ch);
            // Return the response
            return $response;
        }
    }
}
