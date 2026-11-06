# Decision Log

## Embed Choice

I selected OpenStreetMap as the embedded map solution because it is free to use, easy to implement, does not require an API key, and supports responsive iframe embedding. OpenStreetMap also provides privacy-friendly alternatives compared to some commercial mapping services.

## API Choice

I selected the Open-Meteo API to provide real-time weather information.

Reasons for this choice include:

- Free to use
- No API key required
- Reliable weather data
- Easy integration using the JavaScript Fetch API
- No sensitive data stored in the application

The API provides current weather conditions including temperature, wind speed, and weather codes.

## Privacy Measures

Several privacy-focused measures were implemented.

### Lazy Loading

The embedded map uses:

```html
loading="lazy"
```

This delays loading until the content is needed.

### Referrer Policy

The map uses:

```html
referrerpolicy="no-referrer"
```

This reduces information passed to third-party services.

### Sandbox Restrictions

The iframe uses sandbox permissions to restrict potentially risky functionality and reduce exposure to embedded content.

### Residual Tracking

Although privacy measures have been applied, some third-party tracking may still occur.

Potential information visible to service providers may include:

- IP address
- Browser type
- Operating system information
- Device information
- Approximate geographic region

This occurs whenever visitors load content from external providers such as OpenStreetMap.

## Performance Optimizations

The following performance improvements were implemented:

- Lazy-loaded embedded content
- Responsive iframe sizing
- Responsive hero image
- WebP image support
- JPEG image fallback
- Minimal CSS
- Minimal JavaScript
- No unnecessary frameworks or libraries

These measures help reduce page weight and improve loading performance.

## SEO and AIO Metadata

The following SEO and AI optimization tags were added:

### HTML Title

```html
<title>
```

Provides a descriptive page title.

### Meta Description

```html
<meta name="description">
```

Provides a search-friendly summary.

### Robots Metadata

```html
<meta name="robots">
```

Allows search engines to index the page.

### Canonical URL

```html
<link rel="canonical">
```

Identifies the preferred version of the page.

### Open Graph Metadata

The following Open Graph tags were added:

- og:title
- og:description
- og:type

These improve sharing previews and AI understanding of page content.

## API Security

No API keys are stored in the project.

Weather data received from the API is sanitized before being inserted into the DOM using the sanitizeOutput() function.

This helps reduce potential security risks associated with rendering third-party data.

## Lighthouse Results

Target Lighthouse scores:

- Performance ≥ 90
- SEO ≥ 90

Actual Scores:

Performance: 1/1

SEO: 4/4

The final scores will be recorded after Lighthouse testing is completed.