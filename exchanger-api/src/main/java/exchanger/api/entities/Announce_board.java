package exchanger.api.entities;

public class Announce_board {
    private Long id;
    private Long user_id;
    private Long offer_id;
    private Boolean isActive;


    public void setActive(Boolean active) {
        isActive = active;
    }

    public Long getId() {
        return id;
    }

    public Long getUser_id() {
        return user_id;
    }

    public Long getOffer_id() {
        return offer_id;
    }

    public Boolean getActive() {
        return isActive;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setUser_id(Long user_id) {
        this.user_id = user_id;
    }

    public void setOffer_id(Long offer_id) {
        this.offer_id = offer_id;
    }
}
