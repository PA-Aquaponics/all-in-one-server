package ch.zhaw.paaq.service;

import ch.zhaw.paaq.model.Sensor;
import ch.zhaw.paaq.repository.SensorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class SensorService {

    private final SensorRepository sensorRepository;

    @Autowired
    public SensorService(SensorRepository sensorRepository) {
        this.sensorRepository = sensorRepository;
    }

    public Sensor saveSensor(Sensor sensor) {
        return sensorRepository.save(sensor);
    }

    public List<Sensor> getAllSensors() {
        return sensorRepository.findAll();
    }

    public Optional<Sensor> getSensorById(int id) {
        return sensorRepository.findById(id);
    }
}
