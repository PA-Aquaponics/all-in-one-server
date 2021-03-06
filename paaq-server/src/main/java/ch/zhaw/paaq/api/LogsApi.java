/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech) (5.3.0).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
package ch.zhaw.paaq.api;

import ch.zhaw.paaq.model.Log;
import ch.zhaw.paaq.model.Sensor;
import io.swagger.annotations.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import javax.validation.constraints.*;
import java.util.List;
import java.util.Map;
import java.util.Optional;
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2021-11-10T15:30:58.573456300+01:00[Europe/Berlin]")
@Validated
@Api(value = "logs", description = "the logs API")
public interface LogsApi {

    default Optional<NativeWebRequest> getRequest() {
        return Optional.empty();
    }

    /**
     * POST /logs
     * create new log in the database
     *
     * @param log  (optional)
     * @return successfully created a new log (status code 200)
     *         or bad input parameter (status code 400)
     */
    @ApiOperation(value = "", nickname = "addLog", notes = "create new log in the database", tags={  })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "successfully created a new log"),
        @ApiResponse(code = 400, message = "bad input parameter") })
    @RequestMapping(
        method = RequestMethod.POST,
        value = "/logs",
        consumes = { "application/json" }
    )
    default ResponseEntity<Void> addLog(@ApiParam(value = "") @Valid @RequestBody(required = false) Log log) {
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }


    /**
     * GET /logs
     * get a list of logs
     *
     * @return search results matching criteria (status code 200)
     *         or no entries (status code 204)
     *         or bad input parameter (status code 400)
     */
    @ApiOperation(value = "", nickname = "logsGet", notes = "get a list of logs", response = Log.class, responseContainer = "List", tags={  })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "search results matching criteria", response = Log.class, responseContainer = "List"),
        @ApiResponse(code = 204, message = "no entries"),
        @ApiResponse(code = 400, message = "bad input parameter") })
    @RequestMapping(
        method = RequestMethod.GET,
        value = "/logs",
        produces = { "application/json" }
    )
    default ResponseEntity<List<Log>> logsGet() {
        getRequest().ifPresent(request -> {
            for (MediaType mediaType: MediaType.parseMediaTypes(request.getHeader("Accept"))) {
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                    String exampleString = "{ \"value\" : \"float\", \"timestamp\" : \"timestamp\", \"serialNrDevice\" : \"12770000001\", \"unit\" : \"%\", \"system\" : \"Aqualab\", \"name\" : \"A_O2 % Sat\", \"id\" : 55, \"tank\" : \"A\" }";
                    ApiUtil.setExampleResponse(request, "application/json", exampleString);
                    break;
                }
            }
        });
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }

}
