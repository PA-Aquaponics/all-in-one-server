package ch.zhaw.paaq.api;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.context.request.NativeWebRequest;
import java.util.Optional;
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2021-11-10T15:30:58.573456300+01:00[Europe/Berlin]")
@Controller
@RequestMapping("${openapi.aquaponicSensorsDB.base-path:}")
public class LogsApiController implements LogsApi {

    private final NativeWebRequest request;

    @org.springframework.beans.factory.annotation.Autowired
    public LogsApiController(NativeWebRequest request) {
        this.request = request;
    }

    @Override
    public Optional<NativeWebRequest> getRequest() {
        return Optional.ofNullable(request);
    }

}
