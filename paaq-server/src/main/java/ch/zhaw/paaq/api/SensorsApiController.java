package ch.zhaw.paaq.api;

import ch.zhaw.paaq.model.Sensor;
import ch.zhaw.paaq.repository.SensorRepository;
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
public class SensorsApiController implements SensorsApi {

    private SensorService sensorService;

    private final NativeWebRequest request;

    @Autowired
    public SensorsApiController(NativeWebRequest request, SensorService sensorService) {
        this.sensorService = sensorService;
        this.request = request;
    }

    @Override
    public Optional<NativeWebRequest> getRequest() {
        return Optional.ofNullable(request);
    }

    @Override
    public ResponseEntity<List<Sensor>> sensorsGet() {
        List<Sensor> response = sensorService.getAllSensors();
        return new ResponseEntity<>(response, HttpStatus.ACCEPTED);
    }
}
