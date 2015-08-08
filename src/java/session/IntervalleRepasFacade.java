/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package session;

import beans.IntervalleRepas;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 *
 * @author NOUREDDINE
 */
@Stateless
public class IntervalleRepasFacade extends AbstractFacade<IntervalleRepas> {
    @PersistenceContext(unitName = "AppTI3PU")
    private EntityManager em;

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

    public IntervalleRepasFacade() {
        super(IntervalleRepas.class);
    }
    
}
