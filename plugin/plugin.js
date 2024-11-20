import { join } from "path";

import { minify } from "uglify-js";


export default function(rJS, filesystem, config, isDev) {
    const files = [];
    filesystem
    .traverse((file) => {
        if(/^_/.test(file.name)) return;
        const result = !isDev
            ? minify(file.contents, config.uglifyJSOptions ?? {})
            : { code: file.contents };
        
        if(result.error) throw result.error;

        files.push( 
            new rJS.File(
                join(config.outPath ?? ".", file.relativePath),
                result.code
            )
        );
    }, true);

    return files;
}