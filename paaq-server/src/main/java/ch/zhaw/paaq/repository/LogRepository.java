package ch.zhaw.paaq.repository;

import ch.zhaw.paaq.model.Log;
import ch.zhaw.paaq.model.Sensor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LogRepository extends JpaRepository<Log, Integer> {

    List<Log> findAllByOrderByTimestampDesc(Pageable pageable);
}
