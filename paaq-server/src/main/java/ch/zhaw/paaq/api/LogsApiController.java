package ch.zhaw.paaq.api;

import ch.zhaw.paaq.model.Log;
import ch.zhaw.paaq.repository.SensorRepository;
import ch.zhaw.paaq.service.LogService;
import ch.zhaw.paaq.service.SensorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.context.request.NativeWebRequest;

import java.util.List;
import java.util.Optional;
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2021-11-10T15:30:58.573456300+01:00[Europe/Berlin]")
@Controller
@RequestMapping("${openapi.aquaponicSensorsDB.base-path}")
public class LogsApiController implements LogsApi {

    private LogService logService;

    private final NativeWebRequest request;

    @Autowired
    public LogsApiController(NativeWebRequest request, LogService logService) {
        this.logService = logService;
        this.request = request;
    }

    @Override
    public Optional<NativeWebRequest> getRequest() {
        return Optional.ofNullable(request);
    }

    @Override
    public ResponseEntity<List<Log>> logsGet() {
        List<Log> response = logService.getAllLogs();
        return new ResponseEntity<>(response, HttpStatus.ACCEPTED);
    }

    @Override
    public ResponseEntity<Void> addLog(Log log) {
        if (logService.getLogById(log.getLogId()).isPresent()) {
            return new ResponseEntity<>(HttpStatus.ALREADY_REPORTED);
        } else {
            logService.saveLog(log);
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }
}
