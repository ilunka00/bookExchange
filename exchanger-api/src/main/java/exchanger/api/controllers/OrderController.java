package exchanger.api.controllers;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin
public class OrderController {
    @PutMapping("/api/exchange/{exchangeId}/remove")
    public void remove(@PathVariable int expenseId) throws Exception {
        System.out.printf("remove - %d\n", expenseId);
        return;
    }
}
